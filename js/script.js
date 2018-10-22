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
      axios.get('blog/article/').then(response=>{
            this.articles=response.data.results;
          });
    }
  }
})

new Vue({
  el: '#post',
  data: {
    article:''
  },
  created(){
    this.loadArticles();
  },
  methods: {
    loadArticles: function(){
      axios.get('blog/article/1/').then(response=>{
            this.article=response.data.results;
          });
    }
  }
})

Mock.mock('blog/article/', 'get', function() {
  a= {
    "count":7,
    "next":null,
    "previous":null,
    "results":[
        {
          title:"python学习笔记",
          pub_time:"2018-10-16 15:55:20",
          category:{
            id:1,
            name:"编程开发"
          },
          tag:[
          {
            id:1,
            name:"python"
          },
          {
            id:2,
            name:"django"
          }
          ],
          read_num:90,
          content:"In order to receive the best answers to your questions please follow these simple guidelines.\
  Be descriptive about your question or problem and be sure to include any errors. Single line topics will rarely receive answers and do not just post a screenshot.\
  Provide examples of the code in question and use syntax highlighting.\
  Breakdown the issue in your code and provide a link to an example that replicates it. Use JSFiddle, CodePen, JSBin, or CodeSandbox.\
  Following these few steps will greatly improve your chances of getting a good quality answer to your issue. Remember, everyone is here to share ideas and to help out using their own free time. Making an effort to craft a well thought out topic pays tribute to this."
        },
        {
          title:"python学习笔记",
          pub_time:"2018-10-16 15:55:20",
          category:{
            id:1,
            name:"编程开发"
          },
          tag:[
          {
            id:1,
            name:"python"
          },
          {
            id:2,
            name:"django"
          }
          ],
          read_num:90,
          content:'<div class="excerpt"><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum exercitation ullamco laboris nisi ut aliquip.</p></div>\
							<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>\
							<blockquote><p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet vultatup duista.</p></blockquote>\
							<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril.</p>\
							<h2>Heading 1</h2>\
							<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse lorem ipsum dolor sit amet.</p>\
							<h2>Heading 2</h2>\
							<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo.</p>\
							<h2>Heading 3</h2>\
							<p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum hendrerit in vulputate velit esse molestie.</p>\
							<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>\
							<p><code>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</code></p>\
							<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>\
							<div class="note">\
							  <ol>\
								<li>Lorem ipsum</li>\
								<li>Sit amet vultatup nonumy</li>\
								<li>Duista sed diam</li>\
							  </ol>\
							  <div class="clear"></div>\
							</div>\
							<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\
							<p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.</p>'
        }
      ]
  }
    return a;
});



Mock.mock('blog/article/1/', 'get', function() {
  a= {
    "count":7,
    "next":null,
    "previous":null,
    "results":
        {
          title:"python学习笔记",
          pub_time:"2018-10-16 15:55:20",
          category:{
            id:1,
            name:"编程开发"
          },
          tag:[
          {
            id:1,
            name:"python"
          },
          {
            id:2,
            name:"django"
          }
          ],
          read_num:90,
          content:'<div class="excerpt"><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum exercitation ullamco laboris nisi ut aliquip.</p></div>\
							<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>\
							<blockquote><p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet vultatup duista.</p></blockquote>\
							<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril.</p>\
							<h2>Heading 1</h2>\
							<p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse lorem ipsum dolor sit amet.</p>\
							<h2>Heading 2</h2>\
							<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo.</p>\
							<h2>Heading 3</h2>\
							<p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum hendrerit in vulputate velit esse molestie.</p>\
							<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>\
							<p><code>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</code></p>\
							<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>\
							<div class="note">\
							  <ol>\
								<li>Lorem ipsum</li>\
								<li>Sit amet vultatup nonumy</li>\
								<li>Duista sed diam</li>\
							  </ol>\
							  <div class="clear"></div>\
							</div>\
							<p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>\
							<p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.</p>'
        }
  }
    return a;
});