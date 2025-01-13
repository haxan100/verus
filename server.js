const express = require('express');
const fs = require('fs');
const axios = require('axios');
const app = express();
const PORT = 5000;

// Konfigurasi JSONBin
const API_URL = "https://api.jsonbin.io/v3/b/6763da11e41b4d34e467efa5"; // Bin ID baru
const MASTER_KEY = "$2a$10$oHHOo.JJgG8wpyq2YovM1O/ZPMVY7/qbhXsEd//uVX39QaMDmWtXO";
const ACCESS_KEY = "$2a$10$Z0F/Tbctk.Pt57OJGvo36.nlNsoId5BBs4CUOjp4gQXz6fTMEWZNq";
const DEVICE_NAME = "HP-1"; // Nama unik untuk setiap perangkat

// Fungsi membaca suhu CPU
function getCPUTemperature() {
    const tempPath = '/sys/class/thermal/thermal_zone0/temp';
    try {
        if (fs.existsSync(tempPath)) {
            const rawTemp = fs.readFileSync(tempPath, 'utf8');
            return { status: 'success', temperature: parseFloat(rawTemp) / 1000 }; // Konversi ke °C
        } else {
            return { status: 'error', message: 'Temperature file not found' };
        }
    } catch (error) {
        return { status: 'error', message: error.message };
    }
}

// Fungsi mengirim data suhu ke JSONBin
async function sendTemperatureToAPI(tempData) {
    try {
        const payload = {
            device: DEVICE_NAME,
            temperature: tempData.temperature,
            timestamp: new Date().toISOString(),
        };
        const response = await axios.put(API_URL, payload, {
            headers: {
                'X-Master-Key': MASTER_KEY,
                'X-Access-Key': ACCESS_KEY,
                'Content-Type': 'application/json',
            },
        });
        console.log(Data sent to JSONBin: ${response.status});
    } catch (error) {
        console.error(Error sending data: ${error.message});
    }
}

// Endpoint untuk memeriksa suhu secara manual
app.get('/cpu_temp', async (req, res) => {
    const tempData = getCPUTemperature();
    if (tempData.status === 'success') {
        await sendTemperatureToAPI(tempData);
    }
    res.json(tempData);
});

// Jalankan server dan kirim data setiap 10 detik
app.listen(PORT, () => {
    console.log(Server running on http://localhost:${PORT});
    setInterval(async () => {
        const tempData = getCPUTemperature();
        if (tempData.status === 'success') {
            console.log(Current CPU Temperature: ${tempData.temperature} °C);
            await sendTemperatureToAPI(tempData);
        } else {
            console.error(Error reading temperature: ${tempData.message});
        }
    }, 10000); // Kirim data setiap 10 detik
});