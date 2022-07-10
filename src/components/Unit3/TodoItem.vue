<template>
    <div class="container-todo-item">
         <div v-if="tasks == ''" class="not-task">
            Không có công việc nào được thêm.....
        </div>
        <div v-for="(task,index) in tasks" :key="index" class="list-task" v-else>
            <div class="name-task">
                <input type="checkbox" v-model="task.done"> <span :class="{complete:task.done}">{{ task.name }}</span> 
            </div>
            <div class="delete-task">
                <button v-show="task.done" @click="deleteTask(index)">Xóa</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            tasks: {
                type: Array,
                default() {
                    return [];
                }
            },
        },

        methods: {
            deleteTask(key) {
                let data = {
                    key:key,
                }
                this.$emit('EventDeleteTask',data);
            }
        },
    }
</script>

<style lang="scss" scoped>
    .container-todo-item{
        width: 100%;
        height: 350px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.5);
        backdrop-filter: blur(5px);
        margin-top: 5%;
        overflow: scroll;

        .list-task{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 50px;
            padding: 0 5%;
            border-bottom: 1px solid white;
            .name-task{
                width: 80%;
                text-align: left;

                .complete{
                    text-decoration: line-through;
                    opacity: 0.5;
                }
            }

            .delete-task{
                width: 10%;
                text-align: left;

                button{
                    padding: 15%;
                    color: black;
                    font-weight: bold;
                    cursor:pointer;
                }
            }
        }

        .not-task{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>