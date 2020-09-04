<template>
  <div>
        <div class="form-group">
            <a href="#" class="btn btn-success">Create new company</a>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Companies list</div>
            <div class="panel-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Website</th>
                        <th>Email</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(company, index) in listCompanies" :key="index">
                        <td>{{ company.name }}</td>
                        <td>{{ company.address }}</td>
                        <td>{{ company.website }}</td>
                        <td>{{ company.email }}</td>
                        <td class="text-center">
                            <a href="#"  class="btn btn-warning">
                                Edit
                            </a>
                            <a href="#"
                               class="btn btn-danger">
                                Delete
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['listCompanies'])
}
</script>

<style>

</style>
