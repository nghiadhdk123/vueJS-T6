<template>
    <div class="infoWrap">
        <div class="infoLabel">
            Xin chào: {{ email }}
            <br>
            Mật khẩu: {{ password }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            email: {
                type: String,
                default: 'Đang cập nhật'
            },
            password: {
                type: String,
                default(){
                    return 'Đang cập nhật'
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.infoWrap {
      background: #fff;
      border: 1px solid #6E6E6E;
      padding: 24px;
      height: 250px;
      width: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 24px;

      .infoLabel {
        font-weight: bold;
        color: #00AAAA;
      }
    }
</style>