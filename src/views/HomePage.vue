<template>
  <div>
    <h1>CHÀO MỪNG BẠN ĐẾN VỚI ỨNG DỤNG QUẢN LÝ DANH BẠ</h1>
    <div v-if="name == ''" class="not-login">
      <div class="option">
        <h2>Bạn chưa có tài khoản?</h2>
        <RouterLink class="option-link" to="/signup">Đăng ký</RouterLink>
      </div>
      <div class="option">
        <h2>Bạn đã có tài khoản?</h2>
        <RouterLink class="option-link" to="/login">Đăng nhập</RouterLink>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center" v-if="name != ''">
      <router-link :to="{ name: 'contactbook' }" class="nav-link link">
        <i class="fas fa-address-book"></i>
        Đi đến danh bạ
        <i class="fa-solid fa-caret-right"></i>
      </router-link>
      <div>
        <div>
          <h4>Thông tin người dùng:</h4>
          <p>Tên người dùng: {{ name }}</p>
          <p>Tên tài khoản: {{ email }}</p>
        </div>
        <button @click="logout">Đăng xuất</button>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: "",
      email: ""
    };
  },

  mounted() {
    axios.get("http://localhost:3000/user", { headers: { token: localStorage.getItem("token") } })
      .then(res => {
        this.name = res.data.user.name;
        this.email = res.data.user.email;
      });
  },

  methods: {
    logout() {
      alert("Bạn đã đăng xuất khỏi ứng dụng!");
      localStorage.clear();
      this.$router.go("/");
    }
  }
};
</script>

<style scoped>
button {
  width: 200px;
  height: 50px;
  background-color: black;
  color: white;
  font-size: 20px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #333;
}

button:focus {
  outline: none;
}

.link {
  font-size: 30px;
  background: #000;
  color: #fff;
}

.link:hover {
  background-color: #333;
  color: #fff;
}

.not-login {
  display: flex;
  justify-content: space-around;
  margin-top: 20%;
}

.option {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.option-link {
  background-color: #000;
  color: #fff;
  padding: 10px 30px;
  font-size: 20px;
  text-decoration: none;
}

.option-link:hover {
  opacity: 0.8;
}
</style>