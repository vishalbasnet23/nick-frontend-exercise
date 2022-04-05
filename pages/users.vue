<template>
  <div class="users__page">
    <Aside />
    <main class="users__main">
      <h2 class="users__main_title">Users</h2>
      <div class="users__grid">
        <User/>
      </div>
      <UserModal/>
    </main>
  </div>
</template>
<script>
import Aside from '~/components/common/aside'
import User from '~/components/users/user'
import UserModal from '~/components/users/modal'

export default {
  name: 'UserListing',
  components: {
    Aside,
    User,
    UserModal,
},
  middleware: 'auth-guard',
}
</script>
<style lang="scss" scoped>
.users__page {
	display: grid;
	height: 100vh;
	grid-template-columns: 300px 1fr;
}
.users__main {
	padding: 2rem 4rem;
	text-align: right;
	position: relative;
	.users__main_title {
		text-transform: uppercase;
		font-size: 2rem;
		margin-bottom: 2rem;
		text-align: right;
		font-weight: 600;
		display: inline-flex;
		border-bottom: 4px solid #444;
		padding-bottom: 0.4rem;
	}
	.users__grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		justify-content: center;
		gap: 2rem;
	}
}

</style>
