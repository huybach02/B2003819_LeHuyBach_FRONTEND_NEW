<template>
  <div>

    <div class="box">
      <div class="box-item">
        <label for="email">Tên tài khoản</label>
        <input type="text" id="email" v-model="email">
      </div>

      <div class="box-item">
        <label for="password">Mật khẩu</label>
        <input type="password" id="password" v-model="password">
      </div>

      <button @click="login">Đăng nhập</button>

      <p>{{ error }}</p>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "comp-signup",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login() {
      let user = {
        email: this.email,
        password: this.password
      };
      axios.post("http://localhost:3000/login", user)
        .then(res => {
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            alert("Đăng nhập thành công!");
            this.$router.push("/");
          }
        })
        .catch(() => {
          if (this.email == "") {
            this.error = "Tên tài khoản không được rỗng";
          }
          else {
            this.error = "Tên tài khoản hoặc mật khẩu không đúng";
          }
        });
    }
  }
};
</script>

<style scoped>
.box {
  text-align: center;
  background: #181818;
  width: 400px;
  height: auto;
  padding: 25px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 20px 0px #000;
}

.box-item {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.box label {
  color: #fff;
  margin-right: 10px;
  text-align: right;
}

.box input[type="password"],
.box input[type="text"] {
  background: #fff;
  outline: none;
  width: 210px;
  height: 40px;
  border-radius: 40px;
  padding: 0px 15px;
  margin: 15px 0px;
  border: solid 3px #002cff;

}



.box button {
  background: none;
  outline: none;
  width: 160px;
  height: 40px;
  border-radius: 40px;
  margin: 15px 0px;
  border: solid 2px #002cff;
  color: #fff;
  font-size: 18px;
}

.box p {
  color: red;
}
</style>