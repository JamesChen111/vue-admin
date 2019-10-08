<template>
  <div>
    <mu-container>
    <mu-form :model="form" class="mu-demo-form" :label-position="labelPosition" label-width="100">
    <mu-form-item prop="input" label="请输入活动名称">
      <mu-text-field ></mu-text-field>
    </mu-form-item>
    <mu-form-item prop="select" label="请选择活动区域">
      <mu-select v-model="form.select">
        <mu-option v-for="option,index in options" :key="option" :label="option" :value="option"></mu-option>
      </mu-select>
    </mu-form-item>
    <mu-form-item prop="date" label="选择日期">
      <mu-date-input v-model="form.date" type="dateTime" actions></mu-date-input>
    </mu-form-item>
    <!-- 目标描述 -->
    <mu-form-item prop="textarea" label="目标描述">
      <mu-text-field multi-line :rows="3" :rows-max="6"></mu-text-field>
    </mu-form-item> 
<!-- 衡量标准 -->
<mu-form-item prop="textarea" label="衡量标准">
      <mu-text-field multi-line :rows="3" :rows-max="6"></mu-text-field>
    </mu-form-item> 

<mu-form-item prop="input" label="客户(选填)">
      <mu-text-field ></mu-text-field>
    </mu-form-item>

    <mu-form-item prop="input" label="邀评人(选填)">
      <mu-text-field ></mu-text-field>
    </mu-form-item>

    <mu-form-item prop="radio" label="目标公开">
      <mu-radio v-model="form.radio" value="male" label="公开"></mu-radio>
      <mu-radio v-model="form.radio" value="female" label="不公开"></mu-radio>
    </mu-form-item>
<mu-form-item>
    <mu-container class="button-wrapper" >
       <mu-button color="primary">提交</mu-button>
       <mu-button color="">保存</mu-button>
    </mu-container>
</mu-form-item>
  </mu-form>
  </mu-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        'Option 1', 'Option 2', 'Option 3', 'Option 4',
        'Option 5', 'Option 6', 'Option 7', 'Option 8',
        'Option 9', 'Option 10'
      ],
      labelPosition: 'top',
      form: {
        input: '',
        select: '',
        date: '',
        radio: '',
        checkbox: [],
        switch: false,
        slider: 30,
        textarea: ''
      }
    }
  }
};
</script>
<style>
.mu-demo-form {
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
}
.button-wrapper{
  display: unset !important;
}
</style>