<script setup lang="ts">
import { onMounted } from "vue";
import { initMango } from "@altv-mango/webview";
import { useMangoStore } from "@/stores/mango";

const mangoStore = useMangoStore();

onMounted(() => {
    const mango = initMango();
    mangoStore.setMango(mango);
});
</script>

<template>
    <main class="flex h-screen items-center justify-center text-sky-400">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi consequatur eaque earum maiores maxime mollitia nisi
            numquam quae quasi, quibusdam quidem quis repellat, sed sint, totam voluptatum. Aliquam at consequatur culpa enim eos error et
            id illo incidunt iste itaque laboriosam, laborum magnam minima minus molestiae nihil optio placeat quaerat quas quibusdam quod
            voluptatem, voluptatibus. Accusamus consectetur cupiditate illum impedit libero natus repudiandae sequi tempora vitae voluptas.
            Atque distinctio doloremque dolores excepturi exercitationem expedita explicabo libero, nam necessitatibus neque officia,
            perferendis quaerat, quas saepe sed soluta totam. Amet commodi dignissimos dolores id nisi pariatur praesentium qui voluptate
            voluptatem voluptatibus!
        </p>
    </main>
</template>
