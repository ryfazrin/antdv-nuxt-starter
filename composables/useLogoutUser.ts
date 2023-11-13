export default function () {
  const handleSignout = () => {
    storageRemove('user')
    storageRemove('token')

    navigateTo('/auth/login')
  }

  return {
    handleSignout,
  }
}
