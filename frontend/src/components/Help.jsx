import React from 'react';

export default function Help() {
    return(
        <div>
                <button type="button" className='help-button' data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
                  <i class="far fa-question-circle"></i><span className='fd'>Help</span>
                  </button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content modal-sm">
      <div class="modal-header bg-primary">
        <h5 class="modal-title" id="exampleModalLabel">Leave us a message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Your name(optional)</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Email address </label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">How can we help you</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Send</button>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}