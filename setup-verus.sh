#!/bin/bash

echo "=== Installing dependencies..."
apt update && apt upgrade -y
apt install -y git build-essential automake libtool pkg-config libjansson-dev libcurl4-openssl-dev libssl-dev

echo "=== Cloning ccminer VerusHash..."
cd ~
git clone https://github.com/monkins1010/ccminer.git
cd ccminer

echo "=== Compiling ccminer (this may take a few minutes)..."
./build.sh

echo "=== Preparing miner folder..."
mkdir -p ~/verusminer
cp ./ccminer ~/verusminer/
cd ~/verusminer
chmod +x ccminer

echo "=== Creating start.sh..."
cat <<EOF > start.sh
#!/bin/bash
if pgrep -x ccminer > /dev/null
then
  echo "ccminer already running"
else
  cd ~/verusminer
  ./ccminer -a verus -o stratum+tcp://sg.vipor.net:5045 -u RL86n21c7q9vgRYJLfsb6jWgcmJnx4WcZE.testvps -p c=VRSC,mc=VRSC > log-\$(date +\\%Y\\%m\\%d-\\%H\\%M).log 2>&1 &
fi
EOF

chmod +x start.sh

echo "=== Creating stop.sh..."
cat <<EOF > stop.sh
#!/bin/bash
pkill ccminer
EOF

chmod +x stop.sh

echo "=== Setting up cron schedule..."
(crontab -l 2>/dev/null; echo "0 22 * * * /root/verusminer/start.sh") | crontab -
(crontab -l 2>/dev/null; echo "0 4  * * * /root/verusminer/start.sh") | crontab -
(crontab -l 2>/dev/null; echo "0 10 * * * /root/verusminer/start.sh") | crontab -
(crontab -l 2>/dev/null; echo "0 17 * * * /root/verusminer/start.sh") | crontab -

(crontab -l 2>/dev/null; echo "0 1  * * * /root/verusminer/stop.sh") | crontab -
(crontab -l 2>/dev/null; echo "0 8  * * * /root/verusminer/stop.sh") | crontab -
(crontab -l 2>/dev/null; echo "0 15 * * * /root/verusminer/stop.sh") | crontab -
(crontab -l 2>/dev/null; echo "0 19 * * * /root/verusminer/stop.sh") | crontab -

# Optional: Auto-clean logs lebih dari 5 hari
(crontab -l 2>/dev/null; echo "0 3 * * * find /root/verusminer/log-*.log -mtime +5 -delete") | crontab -

echo "=== Done! Verus mining setup complete."
echo "Log will be saved in ~/verusminer/log-YYYYMMDD-HHMM.log"
