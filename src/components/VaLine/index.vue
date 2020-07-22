<!--
* @description  参数1
* @fileName  index
* @author userName
* @date 2020-07-22 08:42:12
* @version V1.0.0
!-->
<template>
  <div id="index" class="index">
    <div class="valine">
      <div class="valine-top">
        <input class="valine-input" v-model="user" type="text" placeholder="用户名" />
        <input class="valine-input" v-model="email" type="text" placeholder="邮箱" />
      </div>
      <textarea
        id="valineArea"
        class="valine-textarea"
        v-model="text"
        @input="inputInfo()"
        name="valine"
        @keydown="tab($event)"
      ></textarea>
      <div class="valine-top-bottom">
        <a href="#">Emoji</a> |
        <a href="#">Preview</a>
      </div>
      <div class="valine-bottom">
        <button type="button">回复</button>
      </div>
    </div>
    <!-- <div :key="markdown" v-markdown>{{markdown}}</div> -->
  </div>
</template>

<script>
export default {
  name: "valine",
  data() {
    return {
      user: "",
      email: "",
      text: "### hello word",
      markdown: ""
    };
  },
  methods: {
    // 方法
    getHight() {
      let textArea = document.getElementById("valineArea");
      textArea.style.height = textArea.scrollHeight + "px";
    },
    inputInfo() {
      let textArea = document.getElementById("valineArea");
      textArea.style.height = "150px";
    },
    tab(e) {
      if (e.keyCode == 9) {
        this.text = this.text + "  ";
        e.returnValue = false;
      }
    }
  },
  watch: {
    // 监测变化
    text() {
      this.getHight();
    }
  }
};
</script>
<style scoped lang='scss'>
@import "~@/globalstyle/styles.scss";
input,
div,
textarea {
  // border: 0;
  outline: 0;
}

.index {
  display: flex;
  justify-content: center;
}

.valine {
  max-width: 740px;
  width: 740px;
  margin-left: 5%;
  margin-right: 5%;
  border: 1px solid #f0f0f0;
  padding: 10px;
  box-sizing: border-box;
  transition: margin 0.7s ease;
  border-radius: 3px;
  .valine-input {
    width: 50%;
    line-height: 2;
    padding: 10px 5px;
    border: 0;
    color: #555;
    box-sizing: border-box;
    border-bottom: 1px dashed $color_Hui;
    transition: border 0.7s ease;
  }
  .valine-input:focus {
    border-bottom: 1px dashed red;
  }
  .valine-textarea {
    width: 100%;
    min-height: 150px;
    margin-bottom: 5px;
    margin-top: 10px;
    border: 0;
    outline: none;
    line-height: 2;
    resize: none;
  }
  .valine-top-bottom {
    font-size: 10px;
    text-align: right;
    padding: 10px;
    margin-bottom: 20px;
  }
  .valine-bottom {
    text-align: right;
    button {
      height: 40px;
      width: 70px;
      border: 1px solid #ededed;
      border-radius: 0.3rem;
      background-color: #e8e8e8;
      transition: all 0.3s ease;
    }
    button:hover {
      outline: none;
      border: 1px solid skyblue;
      background-color: #fff;
      color: skyblue;
    }
    // button:focus {
    //   border: 1px solid skyblue;
    //   background-color: #fff;
    //   color: skyblue;
    // }
    button:focus,
    button:active {
      outline: none;
    }
  }
}

@media screen and (max-width: 720px) {
  .valine .valine-input {
    display: block;
    width: 100%;
  }
}
</style>