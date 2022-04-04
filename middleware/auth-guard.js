export default function ({ store, redirect }) {
  console.log(redirect)
  // If the user is not authenticated
  if (!store.state.user.userAuth) {
    return redirect('/login')
  }
}
