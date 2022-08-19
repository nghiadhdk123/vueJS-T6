<template>
            <div class="wrapper-image" @click="handleOpenFile" v-if="!url && !urlUpdate">
              <input type="file" ref="openFile" @change="handleChangeFile" v-show="false"/>
              <i class="el-icon-picture"></i>
            </div>
            <picture v-else>
              <img :src="link+urlUpdate" v-if="urlUpdate" class="image" alt="">
              <img :src="url" v-else class="image" alt="">
              <span class="close" @click="handleCloseImage">X</span>
            </picture>
</template>

<script>
    export default {
        name: "UploadFileImage",
        data() {
            return {
                url: '',
                file: '',
            }
        },
        props: {
            data: {
                type: Number,
            },
            urlUpdate: {
                type: String,
            },
            link: {
                type: String,
            }
        },
        methods: {
            handleOpenFile() {
      this.$refs.openFile.click();
    },

    handleChangeFile(event) {
      let file = URL.createObjectURL(event.target.files[0]);
      this.url = file;
      this.file = event.target.files[0];
    this.$emit('uploadFile',this.file);
    },

    handleCloseImage() {
      this.url = '';
    //   this.urlUpdate = '';
    this.$emit('closeFile');
    },
        },

        watch: {
            data() {
                this.file = '';
                this.url = '';
            }
        },
    }
</script>

<style lang="scss" scoped>
.wrapper-image{
    height: 300px;
    border: 1px dotted;
    text-align: center;
    line-height: 300px;
    cursor: pointer;
  }

  .image{
    width:100%;
    height:100%;
    position: absolute;
    z-index: 3;
  }

  picture{
    position: relative;
    z-index: 0;
    width: 100%;
    height: 300px;
    display: block;
    cursor: pointer;
  }

  picture::before{
    content:'';
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    background: #00000054;
    z-index: 4;
    cursor: pointer;
  }

  .close{
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    background: gray;
    z-index: 5;
    color: white;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    cursor: pointer;
  }

  picture:hover::before,
  picture:hover .close{
    display: block;
  }
</style>