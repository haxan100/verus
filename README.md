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
wget https://raw.githubusercontent.com/Darktron/pre-compiled/generic/ccminer
wget https://raw.githubusercontent.com/Darktron/pre-compiled/generic/config.json
wget https://raw.githubusercontent.com/Darktron/pre-compiled/generic/start.sh
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
# Tips & Tricks:
- If Termux can't complete update & upgrade please clear app cache and data.
- Disable battery manager, battery optimization for Termux app.
- If you have a "protect battery" option to stop charge at 85% or similar enable it to help preserve battery health.
- If you long press anywhere within Termux then click `More` there is an option to `Keep screen on`.
- Alternatively you can pull down the notification drawer and expand Termux notification to `Acquire wakelock` this will enable you to mine with the screen off **(NOTE! not all devices obey this rule is a hit or miss)**
- Use a pool with low latency to your location/internet.
- Give the miner/stratum time to stabilize hashrate(~30m-1h).
