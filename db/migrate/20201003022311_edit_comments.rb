class EditComments < ActiveRecord::Migration[5.2]
  def change
    change_column_null :comments, :parent_comment_id, true
  end
end
