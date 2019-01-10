require 'rails_helper'

RSpec.describe Massage, type: :model do
  describe '#create' do
    context 'can save' do
      it 'is valid with content' do
        expect(build(:massage, image: nil)).to be_valid
      end

      it 'is valid with image' do
        expect(build(:massage, boby: nil)).to be_valid
      end

      it 'is valid with content and image' do
        expect(build(:massage)).to be_valid
      end
    end

    context 'can not save' do
      it 'is invalid without content and image' do
        massage = build(:massage, boby: nil, image: nil)
        massage.valid?
        expect(massage.errors[:boby]).to include('を入力してください')
      end

      it 'is invalid without group_id' do
        massage = build(:massage, group_id: nil)
        massage.valid?
        expect(massage.errors[:group]).to include('を入力してください')
      end

      it 'is invaid without user_id' do
        massage = build(:massage, user_id: nil)
        massage.valid?
        expect(massage.errors[:user]).to include('を入力してください')
      end
    end
  end
end
