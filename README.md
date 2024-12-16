# Minning Verus dengan Termux dan Runnning Automatis Di Background:

# **`Disclaimer: I accept no warranties or liabilities on this repo. Do it at your own risk!!!`**

# **

# Installation:
1. Download & install Termux [Termux](https://f-droid.org/repo/com.termux_1000.apk):

2. Download & install Termux [Termux Boot](https://f-droid.org/repo/com.termux.boot_1000.apk):


3. Get Termux ready:
- Type `y` then enter key in any prompts!
```
pkg update && pkg upgrade -y
```
```
pkg install libjansson wget nano -y
```
3. Download ccminer, config, start:
``` 8iiiiiiii.
mkdir ccminer && cd ccminer
wget https://raw.githubusercontent.com/haxan100/verus/main/ccminer
wget https://raw.githubusercontent.com/haxan100/verus/main/config.json
wget https://raw.githubusercontent.com/haxan100/verus/main/start.sh
chmod +x ccminer start.sh
```
Start ccminer with:
```
~/ccminer/start.sh
```
# Usage:

1. Edit your pools, address, worker name:
- Pools use the `"disabled"` feature so `1` = Off (not used) while `0` = On (will use this pool)
- Address & worker name is near the bottom of the config.json in format `address here.worker name here`
- Optionally can use ccminer api for monitoring


edit verus wallet dan nama minernya
```
nano config.json
```
2. Start ccminer with:
a
a
```
3. Close ccminer with:
```
CTRL + c

```
!!!! AUTO START MINING !!!!!

ketik 

```
cd && cd && cd && nano ../usr/etc/bash.bashrc
```
copy ini
```
cd ccminer/&&./start.sh
```


.


.

.


.


.

.

.

.











Auto Start Using Termux + Termux Boot
```
1. auto running on apps
```
buat folder ini
```dddd
mkdir -p ~/.termux/boot
```
buat script automatis
```
nano ~/.termux/boot/start-mining.sh
```
masukan kode ini
```
cd ~/ccminer && sh start.sh
```
verivikasi  
```
chmod +x ~/.termux/boot/start-mining.sh
```
ketika untuk buka pertama kali termux 
nano ~/.bashrc

```
~/ccminer/start.sh
```

Reboot 
tunggu 5 menitan

https://luckpool.net/verus/miner.html?RL86n21c7q9vgRYJLfsb6jWgcmJnx4WcZE