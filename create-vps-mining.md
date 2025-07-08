# Verus Solo Mining Setup (VPS – Linux Ubuntu)

Script ini akan mengatur **mining Verus (VRSC)** di VPS berbasis **Ubuntu 20.04 / 22.04**, menggunakan CPU miner (`ccminer`) dengan **jadwal otomatis** (cron) agar tidak aktif terus-menerus. Cocok untuk VPS credit trial (seperti DigitalOcean \$200) agar tidak terdeteksi abuse.

---

## 🔧 Fitur

- Mining otomatis Verus solo via pool `vipor.net`
- Otomatis aktif hanya pada jam tertentu (hemat & aman)
- Logging setiap sesi mining (`log-YYYYMMDD-HHMM.log`)
- Auto-kill saat di luar jam mining
- Auto-clean log lama > 5 hari
- Bisa dipasang massal ke banyak VPS

---

## 📦 Prasyarat

- Ubuntu 20.04 atau 22.04 (root access)
- VPS minimal 1vCPU (2vCPU lebih baik)
- Akses SSH

---

## ⏳ Jadwal Mining Default (dengan cron)

| Jam Mulai | Jam Stop |
| --------- | -------- |
| 22.00     | 01.00    |
| 04.00     | 08.00    |
| 10.00     | 15.00    |
| 17.00     | 19.00    |

---

## 🚀 Cara Install

1. SSH ke VPS kamu:

```bash
ssh root@IP_VPS
```

2. Jalankan:

```bash
wget https://raw.githubusercontent.com/haxan100/verus/main/setup-verus.sh
chmod +x setup-verus.sh
./setup-verus.sh
```

3. (Opsional) Edit `start.sh` dan ganti wallet:

```bash
nano ~/verusminer/start.sh
```

Ubah bagian ini:

```bash
#!/bin/bash
cd ~/verusminer
./ccminer -a verus -o stratum+tcp://sg.vipor.net:5045 \
-u RL86n21c7q9vgRYJLfsb6jWgcmJnx4WcZE.testvps \
-p c=VRSC,mc=VRSC > log-$(date +\%Y\%m\%d-\%H\%M).log 2>&1 &
```

Lalu simpan dan jalankan:

```bash
chmod +x ~/verusminer/start.sh
```

---

## 🛡️ Stop Mining

Buat file `stop.sh`:

```bash
nano ~/verusminer/stop.sh
```

Isi:

```bash
#!/bin/bash
pkill ccminer
```

Lalu beri izin:

```bash
chmod +x ~/verusminer/stop.sh
```

---

## ⏰ Tambahkan Cronjob

Edit cron:

```bash
crontab -e
```

Tambahkan:

```cron
# START MINING
0 22 * * * /root/verusminer/start.sh
0 4  * * * /root/verusminer/start.sh
0 10 * * * /root/verusminer/start.sh
0 17 * * * /root/verusminer/start.sh

# STOP MINING
0 1  * * * /root/verusminer/stop.sh
0 8  * * * /root/verusminer/stop.sh
0 15 * * * /root/verusminer/stop.sh
0 19 * * * /root/verusminer/stop.sh
```

---

## ✅ Cek Cron Jalan

Lihat cron yang aktif:

```bash
crontab -l
```

Cek log mining:

```bash
ls ~/verusminer/log-*.log
tail -f ~/verusminer/log-20250708-2200.log  # contoh file log real-time
```

---

## 📁 Struktur Folder

```
~/verusminer/
├── ccminer          # binary hasil compile
├── start.sh         # jalankan mining + logging
├── stop.sh          # stop mining
├── log-*.log        # file log tiap sesi mining
```

---

## 🔍 Cek Hasil Mining

Jika menggunakan VIPOR pool:

```
https://vipor.net/miner/RL86n21c7q9vgRYJLfsb6jWgcmJnx4WcZE
```

Ganti wallet dengan milikmu sendiri.

---

## 📄 Contoh Isi start.sh

```bash
#!/bin/bash
cd ~/verusminer
./ccminer -a verus -o stratum+tcp://sg.vipor.net:5045 \
-u RL86n21c7q9vgRYJLfsb6jWgcmJnx4WcZE.testvps \
-p c=VRSC,mc=VRSC > log-$(date +\%Y\%m\%d-\%H\%M).log 2>&1 &
```

---

## 🚧 Pool Digunakan

```
stratum+tcp://sg.vipor.net:5045
```

---

Jika butuh versi PDF atau GitHub repo siap push, tinggal bilang!

