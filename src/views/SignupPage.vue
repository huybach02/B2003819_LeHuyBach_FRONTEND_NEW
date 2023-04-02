<template>
    <div>
        <div class="box">
            <div class="box-item">
                <label for="name">Tên người dùng</label>
                <input type="text" id="name" v-model="name">
            </div>
            <div class="box-item">
                <label for="email">Tên tài khoản</label>
                <input type="text" id="email" v-model="email">
            </div>
            <div class="box-item">
                <label for="password">Mật khẩu</label>
                <input type="password" id="password" v-model="password">
            </div>
            <button @click="signup">Đăng ký</button>
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
            name: "",
            email: "",
            password: "",
            error: ""
        };
    },
    methods: {
        signup() {
            let newUser = {
                name: this.name,
                email: this.email,
                password: this.password
            };
            axios.post("http://localhost:3000/signup", newUser)
                .then(() => {
                    this.error = "",
                        alert("Đăng ký thành công, Mời bạn đăng nhập!");
                    this.$router.push("/login");
                })
                .catch(() => {
                    if (this.email == "") {
                        this.error = "Vui lòng nhập đầy đủ thông tin";
                    }
                    else {
                        this.error = "Tên tài khoản đã được sử dụng";
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
    align-items: center;
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