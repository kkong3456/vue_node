<template>
   <div class="memo">
        <div class="act">
            <button class="btn btn-primary" @click="add()">+추가</button>
        </div>
        <ul>
            <li v-for="d in state.data" :key="d.id" @click="edit(d.id)">{{ d.content }}</li>
        </ul>
   </div>
</template>

<script>
import {reactive} from "vue";
import axios from 'axios';

export default{
    setup(){
        const state=reactive({
            data:[],
        })
        
        const add=()=>{
            // state.data.push('추가된 메모내용');


            const content=prompt('내용을 입력해 주세요');
            
            if(!content){
                return alert('내용을 입력해 주세요');
                return add();
        
            }

            axios.post('/api/memos',{content:content}).then((res)=>{
                // console.log(res.data);
                state.data=res.data;
            })
        }

        const edit=(id)=>{
            const content=prompt("내용을 입력해주세요",state.data.find(d=>d.id===id).content);
            // console.log(content);
            axios.put('/api/memos/'+id,{content:content}).then((res)=>{
                state.data=res.data;
            })
        }

        axios.get('/api/memos').then((res)=>{
            // console.log(res);
            state.data=res.data;
        })
        return {state,add,edit}
    }
}
</script>

<style lang="scss" scoped>
.memo {
    .act{
        text-align:right;
        padding:10px 10px 5px 5px;
    };

    ul{
        border-top:1px solid #eee;
        list-style:none;
        padding:15px 0;

        margin:0;

        li {
            padding:15px 10px;
            margin:10px 0;
            border:1px solid #eee;
        }
    }
}

</style>