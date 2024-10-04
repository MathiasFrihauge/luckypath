// plugins/aos.js
import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  if (process.client) {
    app.router.afterEach(() => {
      AOS.init({
        once: true,
        duration: 1200,
      });
    });
  }
};
