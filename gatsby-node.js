exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-clipboard\.js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
