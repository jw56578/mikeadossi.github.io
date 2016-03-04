var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return{
			
		}
	},
	barbers:[],
	chairs:[],
	photos:[],
	getComments:function(shop){
		var query= new Parse.Query("Comment");
		var self = this;
		query.include("commenter");
		query.equalTo("BarberShop",shop);
		query.find({   
			success:function(p){
				self.setState({comments:p});
			}

		});

	},
	getStaffPhotos:function(){
		var query= new Parse.Query("TeamMemberPhoto");
		var self = this;
		query.include("Personnel");
		query.find({
			success:function(p){
				self.setState({staffPhotos:p});
			}

		});

	},
	getPersonnel:function(shop){ // this function gets the data from parse unto our page.
		var query= new Parse.Query("Personnel");
		var self = this;
		query.equalTo("Shop",shop);
		query.find({
			success:function(p){
				self.setState({personnel:p});
				self.getStaffPhotos();

			}

		});
	},
	getPricing:function(shop){ // this function gets the data from parse unto our page.
		var query= new Parse.Query("Pricing");
		var self = this;
		query.equalTo("Shop",shop);
		query.find({
			success:function(p){
				self.setState({pricing:p});
			}

		});
	},
	getBarberShop:function(){
		var self = this;
		var query= new Parse.Query("BarberShop");
		if(this.props.barberShopId){
			query.get(this.props.barberShopId,{
				success:function(shop){
					self.setState({barberShop:shop});
					self.getBarbers(shop);
					self.getChairs(shop);
					self.getComments(shop);
					self.getPersonnel(shop);
					self.getPricing(shop);
				}

			});
		}
		else{
			query.equalTo("name",window.currentBarberShop.name);
		
			// we get our Parse model above and then below we get necessary ID.
			query.find({
				success:function(shop){
					self.setState({barberShop:shop[0]});
					self.getBarbers(shop[0]);
					self.getChairs(shop[0]);
					self.getComments(shop[0]);
					self.getPersonnel(shop[0]);
					self.getPricing(shop[0]);
				}

			});
		}
	},
	getBarbers:function(shop){
		var query= new Parse.Query("User");
		var self = this;
		query.matchesQuery("Shop",shop);
		query.find({
			success:function(barbers){
				self.getPhotos(barbers);
				self.barbers = barbers;
			}

		});

	},
	getChairs:function(shop){
		var query= new Parse.Query("Chair");
		var self = this;
		query.matchesQuery("Owner",shop);
		query.include("Barber");
		query.find({
			success:function(chairs){
				self.chairs = chairs;
			}

		});
	},
	getPhotos:function(barbers){
		var self = this;
		for(var b in barbers){
			var query= new Parse.Query("TeamMemberPhoto");
			query.matchesQuery("Barber",barbers[b]);
			query.include("Barber");
			query.find({
				success:function(photos){
					self.photos = photos;
					self.setState(
						{
							barbers:self.barbers,
							chairs:self.chairs,
							photos:self.photos
						});
				}

			});

		}
	},
	componentDidMount:function(){
		var id = this.props.barberShopId;
		this.getBarberShop();


	},
	componentWillMount: function() {

		var _this = this;
		setInterval(function(){ _this.getBarberShop()}, 3000)	
		console.log("dsajdjsa")
 
	},
	postComment: function(){
		var self = this;
		var commentVal = this.refs.commentTextarea.value;
		var Comment = Parse.Object.extend('Comment');
		var c = new Comment();
		c.save({
			comment:commentVal,
			commenter:Parse.User.current(),
			BarberShop:this.state.barberShop
		},{success:function(){
			self.getComments(self.state.barberShop);
		}});

	},
	makePreferred: function(){
		var Favorite = Parse.Object.extend("Favorite");
		var fav = new Favorite();
		fav.save({
			user:Parse.User.current(),
			Shop:this.state.barberShop
		},{success:function(){

		}})
	},
	render: function(){
		var _this = this;
		// (Step #3 in sending data) we pull down the window object below and put it into another variable.
		var barberShop = window.currentBarberShop;
		var chairHtml = [];
		var pricingHtml = "";
		var personnelHtml ="";
		var barberShopHtml = [];
		var commentHtml = "";
		
		if(this.state.barberShop){
			barberShopHtml.push(<div>{this.state.barberShop.get("city")}</div>);
			barberShopHtml.push(<div>{this.state.barberShop.get("State")}</div>);
			barberShopHtml.push(<div>{this.state.barberShop.get("zip")}</div>);
			barberShopHtml.push(<div>{this.state.barberShop.get("phone")}</div>);
			barberShopHtml.push(<div>{this.state.barberShop.get("email")}</div>);

			
		}
		if(this.state.comments){
			commentHtml =  this.state.comments.map(function(p){
				var commenter = p.get("commenter");
				var name = "Guest";
				if(commenter){
					name = commenter.get("firstName");
				}
				return (<div>
							<p><p className="commenterFirstName">{name}</p> - {p.get("comment")}</p>
							<br/>
						</div>)
			 });
		}	
		if(this.state.personnel){ 
			
			personnelHtml = this.state.personnel.map(function(p){
				var currentStaffPhoto,photoUrl;
				for(var photo in _this.state.staffPhotos){
					if(_this.state.staffPhotos[photo].get("Personnel")
						&& _this.state.staffPhotos[photo].get("Personnel").id === p.id){
						currentStaffPhoto = _this.state.staffPhotos[photo];
						break;
					}
				}
				if(currentStaffPhoto){
					photoUrl = currentStaffPhoto.get("URL");
				}
				return (
					
					  <div >
							<div ><img className=
							"shopImage" src={photoUrl}></img></div>
							Name: {p.get("FirstName")}{p.get("LastName")}
							<br/>
							Credentials: {p.get("Credentials")}
							<br/>
							Favorite Quote: {p.get("Quote")}
							<br/>
							<hr/>
							
						</div>


					)
			});
		}
		if(this.state.pricing){
			pricingHtml = this.state.pricing.map(function(p){
				return (
						<div>
							<div><span className="haircutName">{p.get("description")}</span><span>${p.get("price")}</span></div>
							<div className="haircutDetails">{p.get("details")}</div>
							<br/>
						</div>
					

					)
			});
		}
		var chairHtml ="";
		if(this.state.chairs){
			chairHtml = this.state.chairs.map(function(chair){


				var currentPhoto;
				for(var photo in _this.state.photos){
					if(_this.state.photos[photo].get("Barber").id === chair.get("Barber").id){
						currentPhoto = _this.state.photos[photo];
						break;
					}
				}
				var chairImage = "";
				if(chair.get("Occupied")){
					chairImage = (<img className="shopImage" src="images/redChair.jpeg"></img>)
				}
				else{
					chairImage = (<img className="shopImage" src="images/blackChair.jpeg"></img>)
				}
				return (<div className="chairDiv">{chairImage}<div><img className="currentUserPhoto" src={currentPhoto.get("URL")}></img></div></div>)
			})
		}
		var name = barberShop ? barberShop.name : "";
		var address = barberShop? barberShop.address : "";

		if(this.state.barberShop){
			name = this.state.barberShop.get("name");
			address = this.state.barberShop.get("streetAddress") + ' ' + this.state.barberShop.get("city") + ' '+ this.state.barberShop.get("state");
		}

		//hello
		return(
			<div className="container">
			  <div className="contentContainer">
				<h1>
					{name}
				</h1>
				<br/>
				<p>
				{address}
				</p>
				<br/>
				<button onClick={this.makePreferred}>Preferred</button>
				<br/>
				<br/>
				<div id="hotseatContainer">
				<h1>Hot Seat</h1>
				{chairHtml}
				<hr/>
				<img className="shopImage" src="images/queueChair.jpeg"></img>
				<img className="shopImage" src="images/queueChair.jpeg"></img>
				<img className="shopImage" src="images/queueChair.jpeg"></img>
				<img className="shopImage" src="images/queueChair.jpeg"></img>
				</div>

				<div id="teamContainer">
				<h1>Team Members</h1>
				{personnelHtml}
				</div>

				<div id="contactContainer">
				<h1>Contact</h1>
				{barberShopHtml}
				</div>

				<div id="commentsContainer">
				<h1>Comments</h1>
				<br/>
				{commentHtml}
				<br/>
				<textarea ref="commentTextarea" className="textarea" placeholder="Type in your comment"></textarea>
				<br/>
				<button className="submitComment" onClick={this.postComment}>Post Comment</button>
				</div>

				<div id="pricingContainer">
				<h1>Pricing</h1>
				{pricingHtml}
				</div>

			  </div>
			</div>
		)
	},
});