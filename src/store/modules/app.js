const useAppStore = defineStore('app', {
  state: () => ({
    distributorParams: null,
  }),
  actions: {
    setDistributorParams(value) {
      this.distributorParams = value
    },
  },
})

export default useAppStore
