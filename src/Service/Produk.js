import axios from "axios";

class Produk {
  constructor() {
    this.url = "https://grip-cuts-metadata-blade.trycloudflare.com/";
    this.token = localStorage.getItem("token");
  }

  async getAll() {
    try {
      const res = await axios.get(`${this.url}api/products`, {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      return res.data.data;
    } catch (error) {
      console.error("Gagal memuat produk", error);
      return [];
    }
  }
}

export default new Produk();
