const TestRoutes = [
    {
      path: '/test',
      name: 'Test',
      component: () => import('../../views/Test'),
      meta: {
        title: '测试'
      }
  
    }
  ]
  export default TestRoutes