( function( $ ) {
$( document ).ready(function() {
$('#cssmenu').prepend('<div id="menu-button">Menu</div>');
	$('#cssmenu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
});
} )( jQuery );



new Vue({
  el: '#artiles',
  data: {
    articles:''
  },
  created(){
    this.loadArticles();
  },
  methods: {
    loadArticles: function(){
      axios.get('http://127.0.0.1:8000/blog/article/').then(response=>{
            console.log(response.data.results[0]);
            this.articles=response.data.results;
          });
    }
  }
})

// Mock.mock('blog/tag/1', 'get', function() {
//   a= {
//     "count":7,
//     "next":null,
//     "previous":null,
//     "results":[
//         {
//           title:"python学习笔记",
//           pub_time:"2018-10-16 15:55:20",
//           category:{
//             id:1,
//             name:"编程开发"
//           },
//           tag:[
//           {
//             id:1,
//             name:"python"
//           },
//           {
//             id:2,
//             name:"django"
//           }
//           ],
//           read_num:90,
//           article:"In order to receive the best answers to your questions please follow these simple guidelines.\
//   Be descriptive about your question or problem and be sure to include any errors. Single line topics will rarely receive answers and do not just post a screenshot.\
//   Provide examples of the code in question and use syntax highlighting.\
//   Breakdown the issue in your code and provide a link to an example that replicates it. Use JSFiddle, CodePen, JSBin, or CodeSandbox.\
//   Following these few steps will greatly improve your chances of getting a good quality answer to your issue. Remember, everyone is here to share ideas and to help out using their own free time. Making an effort to craft a well thought out topic pays tribute to this."
//         },
//         {
//           title:"python学习笔记",
//           pub_time:"2018-10-16 15:55:20",
//           category:{
//             id:1,
//             name:"编程开发"
//           },
//           tag:[
//           {
//             id:1,
//             name:"python"
//           },
//           {
//             id:2,
//             name:"django"
//           }
//           ],
//           read_num:90,
//           article:"In order to receive the best answers to your questions please follow these simple guidelines."
//         }
//       ]
//   }
//     return a;
// });