<template>
    <div>
        <nav>
            <ul>
                <li class="li-style"><router-link to="/button">Button</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>
<style lang="css" scoped>
    .li-style{
        list-style-type: none;
        list-style: none;
    }
    .li-style a{
        text-decoration: none;
    }
</style>