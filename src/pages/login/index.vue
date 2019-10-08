  <template>
  <div id="login">
    <div class="login-img">
      <img src="@/assets/img/login.jpg" alt />
    </div>
    <div class="login-content">
      <div class="container">
        <p>密码登录</p>
        <md-field md-clearable>
          <label>账号</label>
          <md-input v-model="initial" placeholder="admin"></md-input>
        </md-field>

        <md-field>
          <label>密码</label>
          <md-input v-model="password" type="password" placeholder="admin"></md-input>
        </md-field>
        <div class="identify-code">
        <md-field md-clearable class="input-code">
          <label>验证码</label>
          <md-input v-model="inputCode" placeholder="请输入验证码"></md-input>
        </md-field>

        <div class="code" @click="refreshCode">
          <identify-code :identifyCode="identifyCode"></identify-code>
        </div>
        </div>
        <div class="login-text">
          <md-button class="md-raised md-primary" @click="login">登录</md-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./index.scss";
import IdentifyCode from './identify'
export default {
  name: "InlineActions",
  components:{
    IdentifyCode
  },
  data: () => ({
    initial: "",
    password: "",
    loginAccound: "admin",
    loginPassword: "admin",
    identifyCodes: "1234567890",
    identifyCode: "",
    inputCode:""

  }),
   mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
    console.log(this.identifyCode)
  },
  methods: {
    login() {
      if (
        this.initial === this.loginAccound &&
        this.password === this.loginPassword
      ) {
        if(this.inputCode === this.identifyCode){
            this.$router.push({
          name: "Dashboard"
        });
        }else{
          alert('验证码有误')
        }
      
      } else {
        alert("密码或账号有误，请重新输入");
      }
    },
     randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
        this.randomNum(0, this.identifyCodes.length)
        ];
      }
    }
  }
};
</script>  
<style lang="scss" scoped>
.md-field:last-child {
  margin-bottom: 40px;
}
</style>