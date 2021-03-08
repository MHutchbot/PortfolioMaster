import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Contact Me
              </p>
  <a class="icon-gmail">
  <div class="gmailback">
    <div class="backtriangle1"></div>
    <div class="backtriangle2"></div>
    <div class="lineone"></div>
    <div class="linetwo"></div>
    <div class="linethree"></div>
    <div class="linefour"></div>
  </div>
</a>
            </div>

           
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
             
               
              </div>
            </aside>
          </div>
        </section>
        );
  }
}