// First API component
document.addEventListener('alpine:init', () => {
    Alpine.data('firstApiData', () => ({
      data: [],
      loading: true,
      error: null,
      
      init() {
        this.fetchData();
      },
      
      async fetchData() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!response.ok) throw new Error('Network response was not ok');
          this.data = await response.json();
          this.data = this.data.slice(0, 6); // Limit to first 6 items
        } catch (err) {
          this.error = `Error fetching data: ${err.message}`;
        } finally {
          this.loading = false;
        }
      }
    }));
    
    // Second API component
    Alpine.data('secondApiData', () => ({
      data: [],
      loading: true,
      error: null,
      
      init() {
        this.fetchData();
      },
      
      async fetchData() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          if (!response.ok) throw new Error('Network response was not ok');
          this.data = await response.json();
          this.data = this.data.slice(0, 5); // Limit to first 5 items
        } catch (err) {
          this.error = `Error fetching data: ${err.message}`;
        } finally {
          this.loading = false;
        }
      }
    }));
  });