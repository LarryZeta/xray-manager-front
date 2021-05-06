<template>
  <div class="container">
    <b-table striped hover :items="accounts" :fields="fields"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: [
            'aid', 
            { key:'uid', sortable: true }, 
            'username', 
            'email', 
            { key: 'activationDate', sortable: true }, 
            { key: 'expireDate', sortable: true }, 
            'action'
        ],
        accounts: [
          { aid: 'uuid', uid: 'uid', username: 'username', email: 'test@example.com', activationDate: '20xx-xx-xx', expireDate: '20xx-xx-xx'}
        ]
      }
    }
  }
</script>
