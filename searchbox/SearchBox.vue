<template>
    <div class="input_wrapper">
        <div class="input_container">
            <Year />
            <StudentGroup />
            <ReportMoment />
            <Student />
        </div>

    </div>
</template>

<script>
// import axios from 'axios'
import Year from "./Year";
import StudentGroup from "./StudentGroup";
import ReportMoment from "./ReportMoment";
import Student from "./Student";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "SearchBox",
    components: {
        Year,
        StudentGroup,
        ReportMoment,
        Student
    },
    methods: mapGetters(["getReport"])
};
</script>

<style lang="scss" scoped>
.input_wrapper {
    width: 30%;
    text-align: left;
    background-color: rgba(138, 168, 120, 0.856);
    // background: linear-gradient(
    //     to right,
    //     rgba(109, 129, 103, 0.856),
    //     rgb(213, 221, 210)
    // );
    padding: 8px;
    margin: 40px 5px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    height: 100%;
}

label {
    margin-left: 16px;
}
</style>
