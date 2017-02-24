<style scoped>

</style>
<template>
    <div>
        <nav>
            <ul>
                <li><router-link to="/button">Button</router-link></li>
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
