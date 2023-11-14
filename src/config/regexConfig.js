// regexConfig.js
export const nameRegex = /^[A-Za-z\s]+$/; // Hanya huruf dan spasi diizinkan untuk nama
export const phoneRegex = /^[0-9]+$/; // Hanya angka diizinkan untuk nomor handphone
export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Contoh validasi alamat email
export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
