class Github {
    constructor() {
      this.client_id = 'a46923dea556216919eb';
      this.client_secret = '173960e8e4c0cc9ff79badb2dc4f3c6513d3d16e';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
    }
  
    async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
      const profile = await profileResponse.json();
      const repos = await repoResponse.json();
  
      return {
        profile,
        repos
      }
    }
  }


// this.client_id = 'a46923dea556216919eb'
// this.client_secret = '173960e8e4c0cc9ff79badb2dc4f3c6513d3d16e'