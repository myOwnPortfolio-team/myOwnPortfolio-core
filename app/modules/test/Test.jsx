import React from 'react';

module.exports = React.createClass({
  render: function() {
    return(
      <div
        id={this.props.id}
        data-aos="slide-right"
        style={{marginBottom: 500}}
      >
        <h2>Module de test</h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed massa felis. Sed eu sagittis velit. Curabitur rhoncus risus nec lorem finibus mattis. Donec maximus orci convallis lorem interdum, et consequat urna bibendum. Nulla porta viverra ultricies. Pellentesque gravida pretium orci, vel semper orci lacinia eget. Sed blandit ipsum ac nisl ornare consequat. Maecenas vitae odio id ipsum tincidunt finibus. Donec in euismod lectus, in mollis lacus. Maecenas ultricies semper massa, a varius mauris pharetra non. Nullam pretium arcu sit amet metus euismod, sit amet condimentum ipsum vestibulum. Sed id odio justo. Donec mollis tincidunt enim quis mollis. Integer et pharetra mi.
      </div>
    );
  }
});
