import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state={
        user:{
            logStatus:false
        },
        pointMessage:{
            showStatus:false,
            pointMsg:''
        },
        tipMessage:'',
    };
const getters = {   //实时监听state值的变化(最新状态)
    isLogin(state) {  //承载变化的showFooter的值
        return state.user
    },
};
const mutations = {
    changeStatus(state,data){ //同上，这里面的参数除了state之外还传了需要增加的值sum
        state.user = data;
    },
    changePonit(state,data){ //同上，这里面的参数除了state之外还传了需要增加的值sum
        state.pointMessage = data;
    },
    changeTipMessage(state,str){ //同上，这里面的参数除了state之外还传了需要增加的值sum
        state.tipMessage = str;
    },
};
const actions = {
    changeStatus(context,data){   //同上注释，num为要变化的形参
        context.commit('changeStatus',data)
    },
    changePonit(context,data){   //同上注释，num为要变化的形参
        context.commit('changePonit',data)
    },
    changeTipMessage(context,str){   //同上注释，num为要变化的形参
        context.commit('changeTipMessage',str)
    },
};
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;

