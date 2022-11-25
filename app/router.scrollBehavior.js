export default async function (to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }
  const findEl = async (hash, x) => {
    return (
      document.querySelector(hash) ||
			new Promise((resolve) => {
			  if (x > 50) {
			    return resolve()
			  }
			  setTimeout(() => {
			    resolve(findEl(hash, ++x || 1))
			  }, 100)
			})
    )
  }
  if (to.hash) {
    const content = await findEl(to.hash)
    const { clientHeight } = await findEl(".header-block")
    return {
      x: 0,
      y: content?.offsetTop - clientHeight || 0
    }
  }
  return { x: 0, y: 0 }
}
