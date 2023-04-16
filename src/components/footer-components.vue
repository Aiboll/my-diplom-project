<template>
<div class="footer">
    <div class="ellipse">
            <img src="../assets/img/footer-ellipse.svg" alt="">
    </div>
    <div class="footer-info">
        <a href="#"><img src="../assets/img/logo.svg" alt=""></a>
        <h1>© ООО СК «АПШЕРОН» <br> Все права защищены. 2010-2020</h1>
        <p>Пользовательское соглашение</p>
        <p>Карта сайта </p>
        <p>Политика конфиденциальности</p>
    </div>
    <div class="footer-menu">
        <nav>
            <ul>
                <li>О ресторане</li>
                <li>Условия доставки</li>
                <li>Возврат товара</li>
                <li class="promo"> <router-link to="/promo">Акции</router-link> 
                </li>
            </ul>
        </nav>
    </div>
    

</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url('../assets/css/footer-style/footer-style');
</style>