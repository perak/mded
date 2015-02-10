Template.TEMPLATE_NAME.rendered = function() {
	// set editor and preview panel to full height
	function setFullHeight() {
		var viewHeight = $(window).height();
		var footerHeight = $("#footer").outerHeight();
		var codeTop = $(".CodeMirror").offset().top;

		var availableHeight = viewHeight - footerHeight - codeTop;
		if(availableHeight < 200) {
			availableHeight = 200;
		}

		$(".CodeMirror").height(availableHeight);
		$(".full-height").height(availableHeight);
	}

	$(window).resize(function() {
		setFullHeight();
	});

	setFullHeight();
	window.scrollTo(0, 0);

	Session.set("editorText", "## MDed - Markdown Editor\n\nBuilt in few minutes with Meteor Kitchen - Code generator for Meteor.js\n\n**Enjoy! :)**");
}

Template.TEMPLATE_NAME.events({
});

Template.TEMPLATE_NAME.helpers({
	"editorOptions": function() {
        return {
            lineNumbers: false,
            mode: "markdown"
        }
	},

	"editorText": function() {
		return Session.get("editorText");
	}
});
