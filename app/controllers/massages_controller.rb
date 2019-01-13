class MassagesController < ApplicationController
  before_action :set_group
  def index
    @massage = Massage.new
    @massages = @group.massages.includes(:user)
  end

  def create
    @massage = @group.massages.new(massage_params)
    if @massage.save
      respond_to do |format|
        format.html do
          redirect_to group_massages_path(@group), notice: "メッセージが送信されました"
        end
        format.json
      end
    else
      @massages = @group.massages.includes(:user)
      flash.now[:alert] = 'メッセージを入力してください。'
      format.html { render :index }
    end
  end

  private
  def massage_params
    params.require(:massage).permit(:boby, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end
