# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  about           :text
#  email           :string           not null
#  location        :string
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_username       (username) UNIQUE
#
class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :comments_written,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Comment

  after_initialize :ensure_session_token

  def self.find_by_credentials(login_credential, password)
    user = User.find_by(username: login_credential) || User.find_by(email: login_credential)
    if user
      user.is_password?(password) ? user : nil
    end
  end

  def password=(password)
    @password=password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
