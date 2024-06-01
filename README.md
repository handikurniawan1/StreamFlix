# StreamFlix

StreamFlix adalah sebuah mock beli film untuk masyarakat indonesia yang sedang tayang, pada website ini user dapat membeli film-film  pilihan yang sedang tayang secara legal dengan harga yang sesuai dengan rating film

## Fitur

1. Menggunakan API tMDB untuk menampilkan data film yang sedang tayang di Indonesia.
2. Menampilkan harga film berdasarkan rating film.
3. Halaman utama yang menampilkan film-film yang sedang tayang di Indonesia dengan sistem pagination.
4. Halaman detail film yang berisi detail dari film yang sedang disorot pengguna.
5. Pengguna diberikan saldo awal sebesar Rp. 100.000 ketika memasuki halaman.
6. Tombol beli bagi pengguna untuk membeli film yang sedang disorot.
7. Validasi pagination yang membawa user kembali ke halaman pertama jika tidak ada data film pada halaman berikutnya.

## Teknologi yang Digunakan

- React
- Vite
- Axios
- React Router DOM
- CSS

## Instalasi dan Menjalankan Proyek

1. Clone repository ini:

   ```bash
   git clone https://github.com/yourusername/streamflix.git
   cd streamflix
    ```
2. Install Dependencies
    ```bash
    npm install
    npm install vite
    npm install axios
    npm install react-router-dom
    ```

3. Run Project
    ```bash
    npm run dev
    ```