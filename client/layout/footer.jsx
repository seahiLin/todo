import '../assets/styles/footer.styl'

export default{
	data(){
	  return{
	    author: 'Seahi'
	  }
	},
	render(){
	  return(
	    <div id="footer">
	      <span>&copy;{this.author}</span>
	    </div>
	  )
	}
}