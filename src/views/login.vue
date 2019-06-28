<template>
  <!-- el-row   用来做布局 -->
  <el-row type="flex" class="row-bg" justify="center" align="middle">
    <!-- el-col 列组件 -->
    <el-col :xs="14" :sm="12" :md="10" :lg="8" :xl="6">
      <el-form
        class="login-form"
        ref="loginForm"
        :model="form"
        label-width="80px"
        label-position="top"
        :rules="formRules"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        username: "admin",
        password: "123456"
      },
      formRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          {
            min: 5,
            max: 12,
            message: "长度在 5 到 12 个字符",
            trigger: "change"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 12,
            message: "长度在 6 到 12 个字符",
            trigger: "change"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          axios({
              url:'http://localhost:8888/api/private/v1/login',
              method:'post',
              data:this.form
          }).then(res => {
            console.log(res);
              if(res.data.meta.status == 200){
                this.$router.push('/home')
              }
          });
        } else {
          // console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
.row-bg {
  height: 100%;
  background-color: #2d434c;
}
.login-form {
  padding: 30px 20px;
  background-color: #fff;
  border-radius: 10px;
  min-width: 400px;
}
</style>


