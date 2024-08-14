# Minning Verus dengan Termux dan Runnning Automatis Di Background:

# **`Disclaimer: I accept no warranties or liabilities on this repo. Do it at your own risk!!!`**

# **

# Installation:
1. Download & install Termux [Termux](https://f-droid.org/id/packages/com.termux/):
```
https://f-droid.org/id/packages/com.termux/
```
2. Download & install Termux [Termux Boot](https://f-droid.org/en/packages/com.termux.boot/):
```
https://f-droid.org/en/packages/com.termux.boot/
```

3. Get Termux ready:
- Type `y` then enter key in any prompts!
```
yes | pkg update && pkg upgrade
yes | pkg install libjansson wget nano
```
3. Download ccminer, config, start:
```
mkdir ccminer && cd ccminer
wget https://raw.githubusercontent.com/haxan100/verus/main/ccminer
wget https://raw.githubusercontent.com/haxan100/verus/main/config.json
wget https://raw.githubusercontent.com/haxan100/verus/main/start.sh
chmod +x ccminer start.sh
```
# Usage:

1. Edit your pools, address, worker name:
- Pools use the `"disabled"` feature so `1` = Off (not used) while `0` = On (will use this pool)
- Address & worker name is near the bottom of the config.json in format `address here.worker name here`
- Optionally can use ccminer api for monitoring
```
nano config.json
```
2. Start ccminer with:
```
~/ccminer/start.sh
```
3. Close ccminer with:
```
CTRL + c

```
Auto Start Using Termux + Termux Boot
```
1. auto running on apps
```

```
mkdir -p ~/.termux/boot
```
```
nano ~/.termux/boot/start-mining.sh
```
```
cd ~/ccminer && sh start.sh
```
```
chmod +x ~/.termux/boot/start-mining.sh
```
Reboot 
tunggu 5 menitan