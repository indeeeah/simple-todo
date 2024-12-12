<script>import "./app.css";
import Router from 'svelte-spa-router'
import routes from './routes/index'
import Layout from './components/Layout.svelte';</script>

<Layout>
  <Router {routes}></Router>
</Layout>
