class Storage {
  constructor() {
    this.storage = this.detectStorage();
  }

  detectStorage() {
    if (window.localStorage) {
      return window.localStorage;
    } else {
      return this;
    }
  }

  /**
   * Gets the keyed item from class object
   * @param {string} key 
   */
  getItem(key) {
    return this[key] || null;
  }

  /**
   * Set the data to key
   * @param {string} key 
   * @param {string} data 
   */
  setItem(key, data) {
    this[key] = data;
  }

  /**
   * Get set item from local storage
   * @param {string} key 
   */
  get(key) {
    return JSON.parse(this.storage.getItem(key));
  }
  
  /**
   * Set data with key
   * @param {string} key 
   * @param {any} data 
   */
  set(key, data) {
    return this.storage.setItem(key, JSON.stringify(data));
  }
}

export default new Storage();