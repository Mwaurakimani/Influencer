<template>
    <section class="manipulation-tab mb-[15px] flex">
        <div>
            <input type="search" placeholder="Search by Name">
        </div>
        <div>
            <input type="search" placeholder="Search by ID">
        </div>
        <div>
            <input type="search" placeholder="Search by Code">
        </div>
        <div>
            <select>
                <option>All</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Suspended</option>
            </select>
        </div>
        <div style="margin-left: auto" class="h-[42px] w-[150px] flex gap-1 justify-end ">
            <slot>
            </slot>
        </div>
    </section>
</template>

<script>
export default {
    name: "DesktopFilterContainer",
    methods: {
        emitCreateProject() {
            this.$emit("createProject")
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../sassLoader";

.manipulation-tab {
    display: flex;
    align-items: center;
    height: 50px;

    input, select {
        font-size: 0.9em;
        border-radius: 5px;
        border: 1px solid lightgrey;
    }
}

</style>
