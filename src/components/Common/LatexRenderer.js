import MathJax from 'react-mathjax2'

export default ( { tex='' } ) => {
  return (
    <div>
      <MathJax.Context input='tex'>
        <MathJax.Node>{tex}</MathJax.Node>
      </MathJax.Context>
    </div>
  )
}
